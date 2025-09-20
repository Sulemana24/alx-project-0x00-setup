import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />

      <div className="flex gap-4 mt-6">
        <Button title="Small Btn" size="small" shape="rounded-sm" />
        <Button title="Medium Btn" size="medium" shape="rounded-md" />
        <Button title="Large Btn" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
