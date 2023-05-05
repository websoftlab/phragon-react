import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTypeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTypeIcon = React.forwardRef<SVGSVGElement, TablerTypeIconProps>(function TablerTypeIcon(props, ref) {
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
			<path d="M4 7 L4 4 L20 4 L20 7" />
			<path d="M9 20 L15 20" />
			<path d="M12 4 L12 20" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTypeIcon.displayName = "TablerTypeIcon";
}
