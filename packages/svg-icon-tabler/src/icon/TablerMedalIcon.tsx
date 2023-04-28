import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMedalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMedalIcon = React.forwardRef<SVGSVGElement, TablerMedalIconProps>(function TablerMedalIcon(
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
			<path d="M12 4v3m-4 -3v6m8 -6v6" />
			<path d="M12 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMedalIcon.displayName = "TablerMedalIcon";
}
