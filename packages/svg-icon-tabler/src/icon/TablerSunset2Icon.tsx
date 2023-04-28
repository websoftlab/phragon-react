import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSunset2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSunset2Icon = React.forwardRef<SVGSVGElement, TablerSunset2IconProps>(function TablerSunset2Icon(
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
			<path d="M3 13h1" />
			<path d="M20 13h1" />
			<path d="M5.6 6.6l.7 .7" />
			<path d="M18.4 6.6l-.7 .7" />
			<path d="M8 13a4 4 0 1 1 8 0" />
			<path d="M3 17h18" />
			<path d="M7 20h5" />
			<path d="M16 20h1" />
			<path d="M12 5v-1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSunset2Icon.displayName = "TablerSunset2Icon";
}
