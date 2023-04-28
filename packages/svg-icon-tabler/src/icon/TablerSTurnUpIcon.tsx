import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSTurnUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSTurnUpIcon = React.forwardRef<SVGSVGElement, TablerSTurnUpIconProps>(function TablerSTurnUpIcon(
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
			<path d="M7 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
			<path d="M5 17v-9.5a3.5 3.5 0 0 1 7 0v9a3.5 3.5 0 0 0 7 0v-13.5" />
			<path d="M16 6l3 -3l3 3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSTurnUpIcon.displayName = "TablerSTurnUpIcon";
}
