import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNumber2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNumber2Icon = React.forwardRef<SVGSVGElement, TablerNumber2IconProps>(function TablerNumber2Icon(
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
			<path d="M8 8a4 4 0 1 1 8 0c0 1.098 -.564 2.025 -1.159 2.815l-6.841 9.185h8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerNumber2Icon.displayName = "TablerNumber2Icon";
}
