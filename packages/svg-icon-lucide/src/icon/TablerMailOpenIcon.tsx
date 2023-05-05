import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMailOpenIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMailOpenIcon = React.forwardRef<SVGSVGElement, TablerMailOpenIconProps>(function TablerMailOpenIcon(
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
			<path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
			<path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMailOpenIcon.displayName = "TablerMailOpenIcon";
}
