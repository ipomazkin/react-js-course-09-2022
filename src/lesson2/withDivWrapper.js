export const withDivWrapper = (OriginalComponent) => {
  const NewComponent = (props) => {
    return (
      <div>
        <OriginalComponent {...props} />
      </div>
    )
  }

  return NewComponent
}