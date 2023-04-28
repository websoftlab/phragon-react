import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRadar2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRadar2Icon = React.forwardRef<SVGSVGElement, TablerRadar2IconProps>(function TablerRadar2Icon(
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
			<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M15.51 15.56a5 5 0 1 0 -3.51 1.44" />
			<path d="M18.832 17.86a9 9 0 1 0 -6.832 3.14" />
			<path d="M12 12v9" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRadar2Icon.displayName = "TablerRadar2Icon";
}
