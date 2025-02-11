
import React from 'react';
import { supabase } from '../../utils/supabase/server';



          
// export default async function Customers() {
//     let { data: workorders, error } = await supabase
//     .from('workorders')
//     .select('*');
//     console.log(workorders)
//     return (
//         <div>
//             <h1>Data from Supabase</h1>
//             <p>{workorders.map((workorder) => {
//                 return (
//                     <div key={workorder.id}>
//                         <h2>{workorder.name}</h2>
//                         <p>{workorder.status}</p>
//                     </div>
//                 );
//             })}</p>
//         </div>
//     );
// }