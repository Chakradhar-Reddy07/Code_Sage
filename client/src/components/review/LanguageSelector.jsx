import LanguageCard from "./LanguageCard";

const languages = [
  {
    label: "Java",
    value: "java",
  },
  {
    label: "Python",
    value: "python",
  },
  {
    label: "JavaScript",
    value: "javascript",
  },
  {
    label: "TypeScript",
    value: "typescript",
  },
  {
    label: "C++",
    value: "cpp",
  },
  {
    label: "Go",
    value: "go",
  },
];

function LanguageSelector({ language, setLanguage }) {
  return (
    <div>
      <h3 className="text-base font-semibold text-white">
        Choose Programming Language
      </h3>

      <div className="mt-3 flex flex-wrap gap-2">
        {languages.map((lang) => (
          <LanguageCard
            key={lang.value}
            label={lang.label}
            value={lang.value}
            selected={language === lang.value}
            onSelect={setLanguage}
          />
        ))}
      </div>
    </div>
  );
}

export default LanguageSelector;