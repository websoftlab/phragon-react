import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCodeDotsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCodeDotsIcon = React.forwardRef<SVGSVGElement, TablerCodeDotsIconProps>(function TablerCodeDotsIcon(
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
			<path d="M15 12h.01" />
			<path d="M12 12h.01" />
			<path d="M9 12h.01" />
			<path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2" />
			<path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCodeDotsIcon.displayName = "TablerCodeDotsIcon";
}
