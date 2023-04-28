import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSpeakerphoneIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSpeakerphoneIcon = React.forwardRef<SVGSVGElement, TablerSpeakerphoneIconProps>(
	function TablerSpeakerphoneIcon(props, ref) {
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
				<path d="M18 8a3 3 0 0 1 0 6" />
				<path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
				<path d="M12 8h0l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSpeakerphoneIcon.displayName = "TablerSpeakerphoneIcon";
}
