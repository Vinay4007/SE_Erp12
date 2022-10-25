# Team Unpaid Backend

## Conventions

|Symbol|Description|
|----|----|
|**?** | Why ?|
|**!** | Note (user specific) |
|**!!**| Note (developer specific) |
|**!>**| In future|
|**!x**| Not recommended|
|**!<**| Implemented|
|**=>**| Denotes |
|**!xx**| Not Supported|

> Conventions can be mixed
>  
> Ex : **!!!>**  => Developer specific feature which need to be implemented in future

## EJS Templates
## Other Servers 
> Unpaid backend uses external logger server to store for ledging.It is required ( not compulsory) to start the external (logger) server
>  
> Also we also need to start converter server

## Few other points 
> Server is open only for 30 seconds (for development)
> 
> While converting files using converter server , check whether the folowing conversion is valid using the respective rpc procedure calls 