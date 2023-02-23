type ProgressBarProps = {
  bgcolor: string;
  progress: number;
};
const ProgressBar = ({ bgcolor, progress }: ProgressBarProps) => {
  const Parentdiv = {
    height: "4px",
    width: "100%",
    backgroundColor: "#EBECEC",
    marginTop: "5px"
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    transition: "width 1s linear"
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv} />
    </div>
  );
};

export default ProgressBar;
