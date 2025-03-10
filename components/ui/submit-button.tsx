import { Button } from "./button";
import { LoaderCircle } from "lucide-react";

export function SubmitButton(props: { label: string; isPending: boolean }) {
  return (
    <Button type="submit" disabled={props.isPending}>
      {props.isPending ? (
        <>
          <LoaderCircle className="size-4 animate-spin" />
          Processing...
        </>
      ) : (
        props.label
      )}
    </Button>
  );
}
