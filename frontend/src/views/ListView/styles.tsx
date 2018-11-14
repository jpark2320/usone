
import { Theme } from '@material-ui/core/styles';

     const table:any =(theme:Theme)=>({
        backgroundColor:'red',
        
        root: {
            //  marginLeft:theme.spacing.unit * 3,
            //  marginRight:theme.spacing.unit * 3,
            //  marginTop: theme.spacing.unit * 3,
            width: '100%',
            
        },
        table:{
            backgroundColor:'red'
        },

        tablePill :{
            backgroundColor:'lightgray',
            borderRadius: '13px',  
            padding:'10px 40px',
            textAlign: 'center' 
        },
        tableWrapper: {
            bacgroundColor:'red'
            // overflowX: 'auto',
        },

    })
    
    const pageStyle:any = (theme:any) => ({
        root:{
            display:'block'
        }
    })

export { table, pageStyle }
