import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFireHydrantIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFireHydrantIcon = React.forwardRef<SVGSVGElement, TablerFireHydrantIconProps>(
	function TablerFireHydrantIcon(props, ref) {
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
				<path d="M5 21h14" />
				<path d="M17 21v-5h1a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-1v-4a5 5 0 0 0 -10 0v4h-1a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h1v5" />
				<path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M6 8h12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFireHydrantIcon.displayName = "TablerFireHydrantIcon";
}
