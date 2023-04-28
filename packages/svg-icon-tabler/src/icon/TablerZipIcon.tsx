import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerZipIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerZipIcon = React.forwardRef<SVGSVGElement, TablerZipIconProps>(function TablerZipIcon(props, ref) {
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
			<path d="M16 16v-8h2a2 2 0 1 1 0 4h-2" />
			<path d="M12 8v8" />
			<path d="M4 8h4l-4 8h4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerZipIcon.displayName = "TablerZipIcon";
}
