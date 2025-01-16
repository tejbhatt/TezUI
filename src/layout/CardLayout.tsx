import Card from './../components/Card';  // Update the path accordingly




const CardLayout = () => {
  return (
    <div className="flex gap-4">
    <div className="flex gap-4">
      <Card variant="primary" size="md">
        <h3 className="text-xl font-semibold">Card Title</h3>
        <p className="text-gray-700">This is some content inside the card.</p>
      </Card>
      
      <Card variant="secondary" size="lg" rounded={false}>
        <h3 className="text-xl font-semibold">Another Card</h3>
        <p className="text-gray-700">This card has a different variant and size.</p>
      </Card>
      <Card variant="outlined" size="lg" rounded={false}>
        <h3 className="text-xl font-semibold">Another Card</h3>
        <p className="text-gray-700">This card has a different variant and size.</p>
      </Card>
    </div>
    </div>
  )
}

export default CardLayout