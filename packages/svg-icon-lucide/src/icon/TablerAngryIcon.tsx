import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAngryIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAngryIcon = React.forwardRef<SVGSVGElement, TablerAngryIconProps>(function TablerAngryIcon(
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
			<path d="M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12" />
			<path d="M16 16s-1.5-2-4-2-4 2-4 2" />
			<path d="M7.5 8 10 9" />
			<path d="m14 9 2.5-1" />
			<path d="M9 10h0" />
			<path d="M15 10h0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAngryIcon.displayName = "TablerAngryIcon";
}
