import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSignalHighIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSignalHighIcon = React.forwardRef<SVGSVGElement, TablerSignalHighIconProps>(
	function TablerSignalHighIcon(props, ref) {
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
				<path d="M2 20h.01" />
				<path d="M7 20v-4" />
				<path d="M12 20v-8" />
				<path d="M17 20V8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSignalHighIcon.displayName = "TablerSignalHighIcon";
}
