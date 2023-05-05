import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVolume1IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVolume1Icon = React.forwardRef<SVGSVGElement, TablerVolume1IconProps>(function TablerVolume1Icon(
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
			<path d="M11 5 L6 9 L2 9 L2 15 L6 15 L11 19 L11 5Z" />
			<path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerVolume1Icon.displayName = "TablerVolume1Icon";
}
