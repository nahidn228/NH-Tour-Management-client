import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAddTourTypeMutation } from "@/redux/features/tour/tour.api";

import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type TourTypeForm = {
  name: string;
};

export function AddTourTypeModal() {
  const form = useForm<TourTypeForm>();
  const [addTourType] = useAddTourTypeMutation();
  const onSubmit: SubmitHandler<TourTypeForm> = async (data) => {
    console.log(data);
    const res = await addTourType({ name: data.name }).unwrap();

    if (res.success) {
      toast.success("Tour Type Created");
      form.reset();
    }

    console.log(res);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Tour Type</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Tour Type</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form id="add-tour-type" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tour Type</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Tour Type Name"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button form="add-tour-type" type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
