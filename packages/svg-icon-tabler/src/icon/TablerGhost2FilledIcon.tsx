import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGhost2FilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGhost2FilledIcon = React.forwardRef<SVGSVGElement, TablerGhost2FilledIconProps>(
	function TablerGhost2FilledIcon(props, ref) {
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
				<path d="M12 1.999l.041 .002l.208 .003a8 8 0 0 1 7.747 7.747l.003 .248l.177 .006a3 3 0 0 1 2.819 2.819l.005 .176a3 3 0 0 1 -3 3l-.001 1.696l1.833 2.75a1 1 0 0 1 -.72 1.548l-.112 .006h-10c-3.445 .002 -6.327 -2.49 -6.901 -5.824l-.028 -.178l-.071 .001a3 3 0 0 1 -2.995 -2.824l-.005 -.175a3 3 0 0 1 3 -3l.004 -.25a8 8 0 0 1 7.996 -7.75zm0 10.001a2 2 0 0 0 -2 2a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1a2 2 0 0 0 -2 -2zm-1.99 -4l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993zm4 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGhost2FilledIcon.displayName = "TablerGhost2FilledIcon";
}
