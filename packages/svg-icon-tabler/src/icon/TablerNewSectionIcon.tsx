import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNewSectionIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNewSectionIcon = React.forwardRef<SVGSVGElement, TablerNewSectionIconProps>(
	function TablerNewSectionIcon(props, ref) {
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
				<path d="M9 12l6 0" />
				<path d="M12 9l0 6" />
				<path d="M4 6v-1a1 1 0 0 1 1 -1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1 -1 1h-1m-5 0h-2m-5 0h-1a1 1 0 0 1 -1 -1v-1m0 -5v-2m0 -5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerNewSectionIcon.displayName = "TablerNewSectionIcon";
}
