import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircle9FilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircle9FilledIcon = React.forwardRef<SVGSVGElement, TablerCircle9FilledIconProps>(
	function TablerCircle9FilledIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				fill="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				strokeWidth={0}
				stroke="none"
			>
				<path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10zm1 5h-2l-.15 .005a2 2 0 0 0 -1.844 1.838l-.006 .157v2l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h2v2h-2l-.007 -.117a1 1 0 0 0 -1.993 .117a2 2 0 0 0 1.85 1.995l.15 .005h2l.15 -.005a2 2 0 0 0 1.844 -1.838l.006 -.157v-6l-.005 -.15a2 2 0 0 0 -1.838 -1.844l-.157 -.006zm0 2v2h-2v-2h2z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircle9FilledIcon.displayName = "TablerCircle9FilledIcon";
}
