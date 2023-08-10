interface Props {
  title: string;
  children: React.ReactNode;
}

const TemplateDetails = ({ title, children }: Props) => {
  return (
    <details className="px-3 py-5 mb-2  bg-white open:bg-slate-900 open:text-white">
      <summary className="mb-4">{title}</summary>
      <div className="flex justify-around items-center flex-wrap gap-y-3">
        {children}
      </div>
    </details>
  );
};

export default TemplateDetails;
