import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherEdit2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherEdit2Icon = React.forwardRef<SVGSVGElement, FeatherEdit2IconProps>(function FeatherEdit2Icon(
	props,
	ref
) {
	const { children, ...rest } = props;
	return (
		<SvgIcon
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
			ref={ref}
			size={24}
			icon={undefined}
			fill="none"
		>
			<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherEdit2Icon.displayName = "FeatherEdit2Icon";
}
