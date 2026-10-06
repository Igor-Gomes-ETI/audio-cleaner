let ffmpeg=null;
const T={LOAD:"LOAD",EXEC:"EXEC",WRITE_FILE:"WRITE_FILE",READ_FILE:"READ_FILE",DELETE_FILE:"DELETE_FILE",ERROR:"ERROR",LOG:"LOG",PROGRESS:"PROGRESS"};
async function load({coreURL,wasmURL,workerURL}){
 const first=!ffmpeg;
 let createFFmpegCore;
 try{
   const mod=await import(coreURL);
   createFFmpegCore=mod.default;
 }catch(e){throw new Error("Falha ao importar módulo ffmpeg-core: "+e.message)}
 if(!createFFmpegCore)throw new Error("ffmpeg-core não exportou a função principal");
 const w=workerURL||coreURL.replace(/\.js$/,".worker.js");
 ffmpeg=await createFFmpegCore({mainScriptUrlOrBlob:coreURL+"#"+btoa(JSON.stringify({wasmURL:wasmURL||coreURL.replace(/\.js$/,".wasm"),workerURL:w}))});
 ffmpeg.setLogger(data=>self.postMessage({type:T.LOG,data}));
 ffmpeg.setProgress(data=>self.postMessage({type:T.PROGRESS,data}));
 return first
}
self.onmessage=async({data:{id,type,data}})=>{
 let out;
 try{
   if(type!==T.LOAD&&!ffmpeg)throw new Error("FFmpeg not loaded");
   if(type===T.LOAD)out=await load(data);
   else if(type===T.EXEC){ffmpeg.setTimeout(data.timeout??-1);ffmpeg.exec(...data.args);out=ffmpeg.ret;ffmpeg.reset()}
   else if(type===T.WRITE_FILE){ffmpeg.FS.writeFile(data.path,data.data);out=true}
   else if(type===T.READ_FILE)out=ffmpeg.FS.readFile(data.path,{encoding:data.encoding});
   else if(type===T.DELETE_FILE){ffmpeg.FS.unlink(data.path);out=true}
   else throw new Error("Mensagem não suportada: "+type);
 }catch(e){self.postMessage({id,type:T.ERROR,data:String(e)});return}
 const transfer=out instanceof Uint8Array?[out.buffer]:[];
 self.postMessage({id,type,data:out},transfer)
};