import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandNetbeansIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandNetbeansIcon = React.forwardRef<SVGSVGElement, TablerBrandNetbeansIconProps>(
	function TablerBrandNetbeansIcon(props, ref) {
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
				<path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
				<path d="M15.5 9.43a1 1 0 0 1 .5 .874v3.268a1 1 0 0 1 -.515 .874l-3 1.917a1 1 0 0 1 -.97 0l-3 -1.917a1 1 0 0 1 -.515 -.873v-3.269a1 1 0 0 1 .514 -.874l3 -1.786c.311 -.173 .69 -.173 1 0l3 1.787h-.014z" />
				<path d="M12 21v-9l-7.5 -4.5" />
				<path d="M12 12l7.5 -4.5" />
				<path d="M12 3v4.5" />
				<path d="M19.5 16l-3.5 -2" />
				<path d="M8 14l-3.5 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandNetbeansIcon.displayName = "TablerBrandNetbeansIcon";
}
