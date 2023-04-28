import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHandFingerOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHandFingerOffIcon = React.forwardRef<SVGSVGElement, TablerHandFingerOffIconProps>(
	function TablerHandFingerOffIcon(props, ref) {
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
				<path d="M8 13v-5" />
				<path d="M8.06 4.077a1.5 1.5 0 0 1 2.94 .423v2.5m0 4v1" />
				<path d="M12.063 8.065a1.5 1.5 0 0 1 1.937 1.435v.5" />
				<path d="M14.06 10.082a1.5 1.5 0 0 1 2.94 .418v1.5" />
				<path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5m-.88 3.129a6 6 0 0 1 -5.12 2.871h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHandFingerOffIcon.displayName = "TablerHandFingerOffIcon";
}
