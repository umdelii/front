import CardLayout from "./CardLayout";

function ParentCardLayout() {
  return (
    <>
      <CardLayout title={"Details"}>
        <p>Props of Components</p>
      </CardLayout>
      <CardLayout>
        <ul>
          <li>Feature A</li>
          <li>Feature B</li>
          <li>Feature C</li>
        </ul>
      </CardLayout>
      <CardLayout>
        <p>Email : example@example.com</p>
        <p>phone : 123-456-7890</p>
      </CardLayout>
    </>
  );
}

export default ParentCardLayout;
