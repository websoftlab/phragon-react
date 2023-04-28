import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBoxIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBoxIcon = React.forwardRef<SVGSVGElement, TablerBoxIconProps>(function TablerBoxIcon(props, ref) {
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
			<path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
			<path d="M12 12l8 -4.5" />
			<path d="M12 12l0 9" />
			<path d="M12 12l-8 -4.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBoxIcon.displayName = "TablerBoxIcon";
}
