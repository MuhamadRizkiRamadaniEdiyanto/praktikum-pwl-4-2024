let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title == "") {
      alert("belum ada inputtan");
      return;
   }
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `flex justify-start items-start text-black font-mono m-7 gap-2 `;
   task.innerHTML = `
   <div class="w-52">
         <p class=" ">${title}</p>
         </div>
         <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
                class="bg-green-200  px-4 py-2 rounded-lg cursor-pointer hover:bg-green-300">
         <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
                class="bg-red-200  px-4 py-2 rounded-lg cursor-pointer hover:bg-red-300">
      
   `;
   output.appendChild(task);
   input.value = "";
   e.preventDefault(); 
}

output.addEventListener('click', (e) => {
      if (e.target.tagName === 'INPUT' && e.target.type === 'button') {
        let taskId = e.target.dataset.task;
        if (e.target.value === 'HAPUS') {
          let task = document.getElementById(taskId);
          output.removeChild(task);
        }
        else if (e.target.value === 'SELESAI') {
          let task = document.getElementById(taskId);
          task.classList.add('line-through');
        }
      }
    });
    

