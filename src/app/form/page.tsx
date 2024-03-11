'use client'
import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import { FormControl } from "@mui/material";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { Form } from "@/model/form";
import cloneDeep from "lodash/cloneDeep";
import { useDispatch, useSelector } from "react-redux";
import { setFormdataValidToReducer } from "@/store/action/demo.action";
import { RootState } from "@/store/reducer";
import { useRouter } from "next/navigation";


export default function NewForm() {

       //const [artist, setArtist] = useState(new Form())
       //const [touchedFields, setTouchedFields] = useState<string[]>([]);
       const router=useRouter();

       const dispatch = useDispatch();
       const selectArtist = useSelector((state: RootState) => state.demoform.myform)
       console.log("selected artist", selectArtist)
       //console.log("artist", artist)


       return (
              <>
                     <div className="grid justify-center">
                            <FormControl >
                                   <div className="p-3"><TextField className="w-96" name="name" label="Name" variant="outlined" required value={selectArtist.name || ''}
                                          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                 dispatch(setFormdataValidToReducer(event.target.value) as any)
                                          }}
                                         // error={touchedFields.includes('name') && ! selectArtist('name').checkName()}
                                          helperText={ !selectArtist.checkName() ? 'Name must be greater than 4 characters' : ''} 
                                          />
                                   </div>

                            </FormControl>
                     </div>
              </>
       )
}


