import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHeading2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHeading2Icon = React.forwardRef<SVGSVGElement, TablerHeading2IconProps>(function TablerHeading2Icon(
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
			<path d="M4 12h8" />
			<path d="M4 18V6" />
			<path d="M12 18V6" />
			<path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHeading2Icon.displayName = "TablerHeading2Icon";
}
