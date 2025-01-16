
import Checkbox from '../components/CheckBox';

const CheckBox = () => {
  return (
    <div className="space-y-6">
    <div>
      <h2 className="text-lg font-bold">First Group</h2>
      <Checkbox label="Default Checkbox" />
    
      <Checkbox disabled label="Disabled Checkbox" />
    </div>
  
    <div>
      <h2 className="text-lg font-bold">Second Group</h2>
      <Checkbox label="Default Checkbox" />
     
      
      <Checkbox disabled label="Disabled Checkbox" />
    </div>
  </div>
  )
}

export default CheckBox