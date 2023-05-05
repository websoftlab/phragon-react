import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVolume2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVolume2Icon = React.forwardRef<SVGSVGElement, TablerVolume2IconProps>(function TablerVolume2Icon(
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
			<path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerVolume2Icon.displayName = "TablerVolume2Icon";
}
