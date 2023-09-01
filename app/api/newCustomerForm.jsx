// import { db } from '@vercel/postgres';
 
// export default async function handler(request, response) {
//   const client = await db.connect();
 
//   try {
//     await client.sql`CREATE TABLE IF NOT EXISTS Customers ( Name varchar(255), BikeDetails varchar(255), Status varchar(255), Phone varchar(255), Email varchar(255)  );`;
//     const names = ['Brents'];
//     const bikeDetails = ['2023 Harley Fatbob'];
//     const status = ['On Lift'];
//     const phone = ['1111111111'];
//     const email = ['test@test.com']; 
//     await client.sql`INSERT INTO Customers (Name, BikeDetails, Status, Phone, Email) VALUES (${names[0]}, ${bikeDetails[0]}, ${status[0]}, ${phone[0]}, ${email[0]});`;
//   } catch (error) {
//     return response.status(500).json({ error });
//   }
 
//   const customers = await client.sql`SELECT * FROM Customers;`;
//   return response.status(200).json({ customers });
// }