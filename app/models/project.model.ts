export interface project{
     title: String
     description: String
     image: String
     technologies :String[]
     gitHub:String
     link?: String 
}

export interface projects{
     projects: project[]
}