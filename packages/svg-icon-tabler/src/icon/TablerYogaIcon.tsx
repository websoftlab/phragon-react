import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerYogaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerYogaIcon = React.forwardRef<SVGSVGElement, TablerYogaIconProps>(function TablerYogaIcon(props, ref) {
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
			<path d="M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M4 20h4l1.5 -3" />
			<path d="M17 20l-1 -5h-5l1 -7" />
			<path d="M4 10l4 -1l4 -1l4 1.5l4 1.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerYogaIcon.displayName = "TablerYogaIcon";
}
