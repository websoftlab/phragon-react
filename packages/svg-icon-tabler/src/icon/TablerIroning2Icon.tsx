import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerIroning2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerIroning2Icon = React.forwardRef<SVGSVGElement, TablerIroning2IconProps>(function TablerIroning2Icon(
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
			<path d="M10 15h.01" />
			<path d="M9 6h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865a1 1 0 0 1 -.985 1.164h-16.82a7 7 0 0 1 7 -7h9.8" />
			<path d="M14 15h.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerIroning2Icon.displayName = "TablerIroning2Icon";
}
