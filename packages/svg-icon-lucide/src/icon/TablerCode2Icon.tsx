import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCode2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCode2Icon = React.forwardRef<SVGSVGElement, TablerCode2IconProps>(function TablerCode2Icon(
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
			<path d="m18 16 4-4-4-4" />
			<path d="m6 8-4 4 4 4" />
			<path d="m14.5 4-5 16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCode2Icon.displayName = "TablerCode2Icon";
}
