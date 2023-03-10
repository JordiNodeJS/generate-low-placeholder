const Github = ({ text, ...props }) => {
  return (
    <div className="text-left  hover:animate-ping">
      <a {...props} target="_blank" rel="noopener noreferrer">
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 0a12 12 0 00-3.797 23.383c.6.108.82-.26.82-.581 0-.285-.011-1.04-.017-2.04-3.338.725-4.042-1.633-4.042-1.633-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.836 2.807 1.305 3.495.999.108-.776.417-1.305.76-1.605-2.665-.294-5.466-1.332-5.466-5.931 0-1.31.465-2.386 1.235-3.228-.135-.294-.536-1.528.104-3.183 0 0 1.007-.324 3.3 1.23.96-.267 1.987-.399 3.005-.405 1.018.006 2.045.138 3.005.405 2.292-1.554 3.297-1.23 3.297-1.23.64 1.655.239 2.889.12 3.182.765.843 1.23 1.918 1.23 3.228 0 4.61-2.807 5.633-5.481 5.922.43.369.82 1.096.82 2.211 0 1.594-.015 2.876-.015 3.265 0 .321.214.696.827.576A12.001 12.001 0 0012 0z"
          />
        </svg>
      </a>
    </div>
  )
}

export default Github
