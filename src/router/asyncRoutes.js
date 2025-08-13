const modules = import.meta.glob('./modules/*.js',{eager:true})
console.log("🚀 ~ modules:", modules)

function formatModules(_modules,result){
  Object.keys(_modules).forEach((key)=>{
    const defaultModule=_modules[key].default
    if(defaultModule){
      result.push(defaultModule)
    }
  })
  return result.sort((a,b)=>a.meta?.order - b.meta?.order)
}

export const asyncRoutes=formatModules(modules,[])
