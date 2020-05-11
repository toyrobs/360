var stack_start_address =  2000, text_start_address = 1000, keyboard_address=500;
var register_name_64 = ["rbp", "rsp", "rip", "rax", "rbx" ,"rdi" ,"rsi" , "rdx", "rcx", "r8", "r9"];
var register_name_32 = ["ebp", "esp", "rip", "eax", "ebx" ,"edi" ,"esi" , "edx", "ecx", "r8d", "r9d"];
var registers = {
    "rbp": stack_start_address, "rsp": stack_start_address,
    "rip": 0, "rax": 0, "rbx": 0, "rdi": 0,
    "rsi": 0, "rdx": 0, "rcx": 0, "r8": 0, "r9": 0
}
var function_table = []
var label_table=[]
var big_mem_table = []
var address_code_table = []
var stack_table = {"2052":0,"2008":0,"2004":0}
var extremes_table = {"max": 0,"min":0}
var first_extreme=false
var submission_count=0;
var rflag_names=["jl","jg","je","jne"]
var rflag = {"jle": false,"jge": false,"jl": false,"jg": false,"je": false,"jne": false}

//   // mov eax,DWORD PTR[ebx+4*eax]