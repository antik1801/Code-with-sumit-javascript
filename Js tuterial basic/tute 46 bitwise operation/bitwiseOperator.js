const object={
    program_mosh: function()
    {
        /// 1 = 00000001, 2 = 00000010, 3 = 00000011
        // Read , write , execute function create using 
        // bitwise operation.
        //4 =00000100
        //2 =00000010
        //or=00000110(6) 
        //and=00000000
        const readPermision = 4;
        const writePermission = 2;
        const executePermission = 1;
        
        console.log(readPermision | writePermission); //or
        console.log(readPermision & writePermission); //or
    },
}

object.program_mosh();