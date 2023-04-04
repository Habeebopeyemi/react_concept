import { nanoid } from "@reduxjs/toolkit";
interface userData {
  userId: number;
  businessId: any;
  text: string;
}
export const userAPI = (id:number):userData => {
      const businessId = nanoid();
      return {
        userId: id,
        businessId,
        text: `the user with id: ${id} has ${businessId} as the businessId`,
      };
};
