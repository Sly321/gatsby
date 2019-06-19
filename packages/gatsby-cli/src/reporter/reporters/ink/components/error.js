import React from "react"
import { Color, Box } from "ink"
import { get } from "lodash"

const Error = ({ details }) => {
  const origError = get(details, `error.message`, null)
  // const stackLength = get(details, `stack.length`, 0)

  return (
    <Box marginTop={1} flexDirection="column">
      <Box flexDirection="column">
        <Box flexDirection="column">
          <Box>
            <Box marginRight={1}>
              <Color black bgRed>
                {` ${details.category.toLowerCase()} `}
                {details.id && ` ${details.id}`}
              </Color>
            </Box>
            {origError}
          </Box>
          <Box marginTop={1}>{details.text}</Box>
        </Box>
        {details.docsUrl && (
          <Box>
            See our docs page for more info on this error: {details.docsUrl}
          </Box>
        )}
      </Box>
      {/* TODO: use this to replace errorFormatter.render in reporter.error func
      {stackLength > 0 && (
        <Box>
          <Color>
            <Box flexDirection="column">
              <Box>Error stack:</Box>
              {details.stack.map((item, id) => (
                <Box key={id}>
                  {item.fileName && `${item.fileName} line ${item.lineNumber}`}
                </Box>
              ))}
            </Box>
          </Color>
        </Box>
      )} */}
    </Box>
  )
}

export default Error