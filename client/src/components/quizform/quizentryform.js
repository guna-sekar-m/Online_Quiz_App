'use client'
import { Dialog } from 'primereact/dialog';      
const Quizentryform = (props) => {
   const {quizentryDialog,hidequizentryform,quizentryformdata,Changehandler,savequizentryform}=props;
   return (
    <Dialog  headerClassName='bg-blue-500 text-white' contentClassName='bg-white dark:bg-gray-800'  resizable={false}  visible={quizentryDialog}  style={{ width: '45rem' }}  breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Quiz Entry Form" modal className="p-fluid"  onHide={hidequizentryform}>
        <form className='mt-10' onSubmit={savequizentryform}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4'>
             <div className='mb-5'>
             <label for="input-label-with-helper-text" class="block text-sm font-medium mb-2 dark:text-white">Full Name</label>
              <input type="text" name='Full Name' value={quizentryformdata['Full Name'] || ''} onChange={Changehandler} className="py-2 px-3 block w-full border border-gray-200 rounded-md text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" required/>
             </div>
             <div className='mb-5'>
             <label for="input-label-with-helper-text" class="block text-sm font-medium mb-2 dark:text-white">Date of Birth</label>
              <input type="date" name='Date of Birth' value={quizentryformdata['Date of Birth'] || ''} onChange={Changehandler} className="py-2 px-3 block w-full border border-gray-200 rounded-md text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" required/>
             </div>
             <div className='mb-5'>
             <label for="input-label-with-helper-text" class="block text-sm font-medium mb-2 dark:text-white">Email</label>
              <input type="email" name='Email' value={quizentryformdata['Email'] || ''} onChange={Changehandler} className="py-2 px-3 block w-full border border-gray-200 rounded-md text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" required/>
             </div>
             <div className='mb-5'>
             <label for="input-label-with-helper-text" class="block text-sm font-medium mb-2 dark:text-white">Mobile Number</label>
              <input type="text" name='Mobile Number' value={quizentryformdata['Mobile Number'] || ''} onChange={Changehandler} className="py-2 px-3 block w-full border border-gray-200 rounded-md text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" required/>
             </div>
             <div className='mb-5'>
               <button type="submit" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                 Submit
               </button>
             </div>
             
             
          </div>
        </form>
    </Dialog>
   )
}
export default Quizentryform;