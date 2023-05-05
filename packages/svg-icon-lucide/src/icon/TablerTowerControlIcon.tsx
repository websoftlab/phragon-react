import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTowerControlIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTowerControlIcon = React.forwardRef<SVGSVGElement, TablerTowerControlIconProps>(
	function TablerTowerControlIcon(props, ref) {
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
				<path d="M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z" />
				<path d="M8 13v9" />
				<path d="M16 22v-9" />
				<path d="m9 6 1 7" />
				<path d="m15 6-1 7" />
				<path d="M12 6V2" />
				<path d="M13 2h-2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTowerControlIcon.displayName = "TablerTowerControlIcon";
}
