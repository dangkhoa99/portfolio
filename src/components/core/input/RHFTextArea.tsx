'use client';

import React from 'react';

import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

export type TRHFTextAreaProps<TFormValue extends FieldValues> = Required<
  Pick<UseControllerProps<TFormValue>, 'control' | 'name'>
> &
  Omit<React.ComponentProps<typeof Textarea>, 'name' | 'defaultValue'> & {
    label?: React.ReactNode;
  };

export const RHFTextArea = <TFormValue extends FieldValues>(
  props: TRHFTextAreaProps<TFormValue>,
) => {
  const { control, name, label, className, required, ...restInputProps } = props;

  const id = React.useId();

  const { field, fieldState } = useController({ control, name });

  return (
    <Field className="gap-1" data-invalid={fieldState.invalid || undefined}>
      {!!label && (
        <FieldLabel htmlFor={id}>
          <span>
            {label}
            {!!required && <span className="text-destructive">{' *'}</span>}
          </span>
        </FieldLabel>
      )}

      <Textarea
        id={id}
        required={required}
        aria-invalid={fieldState.invalid}
        className={cn('hover:border-foreground field-sizing-fixed px-3 py-2 text-sm', className)}
        {...field}
        {...restInputProps}
      />

      <FieldError errors={[fieldState.error]} />
    </Field>
  );
};
